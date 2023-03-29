FROM nodered/node-red
RUN npm install node-red-dashboard node-red-node-mongodb
RUN npm install node-red-contrib-influxdb
RUN npm install bcryptjs fs
COPY --chown=1000:1000 ./entrypoint-custom.sh /entrypoint-custom.sh
ENTRYPOINT ["/entrypoint-custom.sh"]
#CMD ["/usr/sbin/nodered", "-c", "/mosquitto/config/mosquitto.conf"]
