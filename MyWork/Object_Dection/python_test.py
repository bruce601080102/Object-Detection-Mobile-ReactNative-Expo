import importlib
import sys
importlib.reload(sys)
import MySQLdb
import MySQLdb.cursors

from PIL import Image
import base64,io
import numpy as np
import matplotlib.pyplot as plt
from io import BytesIO
import flask 
from flask import render_template, request
import time
import sys
from absl import app, logging, flags
from absl.flags import FLAGS
import time
import cv2
import numpy as np
import tensorflow as tf
from yolov3.yolov3_tf2.models import (
    YoloV3, YoloV3Tiny
)
from yolov3.yolov3_tf2.dataset import transform_images, load_tfrecord_dataset
from yolov3.yolov3_tf2.utils import draw_outputs
from PIL import Image, ImageDraw, ImageFont

from Decode_Encode import *

flags.DEFINE_string('classes', './yolov3/data/coco.names', 'path to classes file')
flags.DEFINE_string('weights', './yolov3/checkpoints/yolov3.tf',
                    'path to weights file')
flags.DEFINE_boolean('tiny', False, 'yolov3 or yolov3-tiny')
flags.DEFINE_integer('size', 416, 'resize images to')
flags.DEFINE_string('image', './yolov3/data/girl.png', 'path to input image')
flags.DEFINE_string('tfrecord', None, 'tfrecord instead of image')
flags.DEFINE_string('output', './yolov3/output.jpg', 'path to output image')
flags.DEFINE_integer('num_classes', 80, 'number of classes in the model')

app._run_init(['yolov3'], app.parse_flags_with_usage)

physical_devices = tf.config.experimental.list_physical_devices('GPU')
tf.config.experimental.set_memory_growth(physical_devices[0], True)


db=MySQLdb.connect(host='localhost',
                   user='root',
                   password='1234',
                   db='banana_test',
                   charset='utf8',
                   cursorclass=MySQLdb.cursors.DictCursor
                )
db.autocommit(True)
cursor = db.cursor()

if FLAGS.tiny:
    yolo = YoloV3Tiny(classes=FLAGS.num_classes)
else:
    yolo = YoloV3(classes=FLAGS.num_classes)
      
yolo.load_weights(FLAGS.weights).expect_partial()
logging.info('weights loaded')

class_names = [c.strip() for c in open(FLAGS.classes).readlines()]
logging.info('classes loaded')
while True:
    time.sleep(0.5)
    list1=[]
    list_pic_num=[]
    SQL="SELECT * FROM banana"       #查詢資料表

    times = cursor.execute(SQL)
    cursor.execute(SQL)
    pic = cursor.fetchall()
    #print('*-----------------------',times)

    
    if len(pic)>0:
        
        for i in range(0,times):
            cursor.execute(SQL)
            ind_pic = cursor.fetchall()[i]['pic_num']
            #print(ind_pic)
            list_pic_num.append(ind_pic)

        #print('times:',times)
        if 0 not in list_pic_num:
            repeat = 0
            while repeat == 0:
                time.sleep(1)
                times = cursor.execute(SQL)
                print(list_pic_num)
                cursor.execute(SQL)
                #print('000000',cursor.fetchall()[0]['pic_num'])
                #print('times',times)
                #cursor.execute(SQL)
                #print('1111111',cursor.fetchall()[1]['pic_num'])
                if cursor.fetchall()[1]['pic_num'] == 0: 
                    repeat += 1
                    cursor.execute(SQL)
                    ind_pic = cursor.fetchall()[1]['pic_num']
                    
                    list_pic_num.append(ind_pic)


        
        
        for txt in range(0,times):
            txt_position = list_pic_num.index(txt)
            cursor.execute(SQL)
            pic=cursor.fetchall()[txt_position]['pic']

            list1.append(pic)

        for del_data in (set(list_pic_num)):
            cursor.execute(SQL)
            SQL_del="DELETE FROM banana WHERE pic_num='%s'" %del_data
            cursor.execute(SQL_del) 


        All_Base64_Xampp=''.join(list1)     
        #print(set(list_pic_num))
        img = decode(All_Base64_Xampp)
        
        #YOLOv3

        img_tf = tf.expand_dims(np.array(img),0)       
        img_tf = transform_images(img_tf, FLAGS.size)
        t1 = time.time()
        boxes, scores, classes, nums = yolo(img_tf)
        t2 = time.time()
        #logging.info('time: {}'.format(t2 - t1))
        print('time----------------: {}'.format(t2 - t1))

        #logging.info('detections:')
        #for i in range(nums[0]):
            #logging.info('\t{}, {}, {}'.format(class_names[int(classes[0][i])],
                                                           # np.array(scores[0][i]),
                                                            #np.array(boxes[0][i])))

        #img = cv2.cvtColor(np.array(img), cv2.COLOR_BGR2RGB)
        #img = draw_outputs(img, (boxes, scores, classes, nums), class_names)
        #img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            
            
        #變透明---------------
            
        img = cv2.cvtColor(np.array(img), cv2.COLOR_BGR2RGB)
        boxes, objectness, classes, nums = (boxes, scores, classes, nums)
        boxes, objectness, classes, nums = boxes[0], objectness[0], classes[0], nums[0]
        wh = np.flip(img.shape[0:2])
        image_plt = Image.new(mode='RGBA', size=(np.array(img).shape[1],np.array(img).shape[0]))
        
        image_plt = Draw (class_names,image_plt,boxes, objectness, classes, nums,wh)
            
            
        str_bas64_output = Encoding(image_plt)
         #傳送
        cursor.execute("insert into banana_python (pic)values('%s')"%str_bas64_output ) 
        
        print('傳送成功')
        
    