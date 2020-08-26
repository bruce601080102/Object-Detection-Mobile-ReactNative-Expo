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
from yolov3.yolov3_tf2.models import (YoloV3, YoloV3Tiny)
from yolov3.yolov3_tf2.dataset import transform_images, load_tfrecord_dataset
from yolov3.yolov3_tf2.utils import draw_outputs
from PIL import Image, ImageDraw, ImageFont



def decode(All_Base64_Xampp):
    img_b64encode = base64.b64decode(All_Base64_Xampp)
    img_b64decode1 = base64.b64decode(img_b64encode)
    image = io.BytesIO(img_b64encode)
    img=Image.open(image)
    print(np.array(img).shape)
    return img

def Draw (class_names,image_plt,boxes, objectness, classes, nums,wh):
    for i in range(nums):
        x1y1 = tuple((np.array(boxes[i][0:2]) * wh).astype(np.int32))
        x2y2 = tuple((np.array(boxes[i][2:4]) * wh).astype(np.int32))
        x1,y1 = x1y1
        x2,y2 = x2y2
        plt_all=[x1y1,x2y2]
        font = ImageFont.truetype(font='儷中黑.ttc',
                                 size=np.floor(3e-2 * 380 + 8).astype('int32'))

        draw1 = ImageDraw.Draw(image_plt)

        name=class_names[int(classes[i])]

        label_size = draw1.textsize(name,font)

        if y1 - label_size[1] >= 0:
            text_origin = np.array([x1, y1 - label_size[1]])
        else:
            text_origin = np.array([x1, y1+1 ])

        img1 = ImageDraw.Draw(image_plt)  

        img1.rectangle(plt_all,  outline ="red") 
        img1.rectangle([tuple(text_origin), tuple(text_origin + label_size)],
                                    fill=(255,0,0))
        draw1 = ImageDraw.Draw(image_plt)
        draw1.text((text_origin), name, fill=(0, 0, 0),font=font) 
    return image_plt    
    
    
def Encoding(image_plt):
    #編碼

    #img_result = Image.fromarray(np.uint8(img))  
    output_buffer = BytesIO()
    #img_result.save(output_buffer, format='png')
    image_plt.save(output_buffer, format='png')
            
    byte_data = output_buffer.getvalue()
    base64_str = base64.b64encode(byte_data)
    str_bas64_output=str(base64_str, encoding = "utf-8")
    return str_bas64_output
  