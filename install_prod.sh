#!/bin/bash

rm -rf /var/www/html/*
cp -R ~mickael/math/math/* /var/www/html
chmod 777 /var/www/html/*