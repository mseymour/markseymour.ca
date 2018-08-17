FROM staticfloat/nginx-certbot
COPY *.conf /etc/nginx/conf.d/
COPY public /usr/share/nginx/html
