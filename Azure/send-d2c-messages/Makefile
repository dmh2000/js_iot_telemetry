
AZURE_SDK=/home/dmh2000/local/projects/iot/azure-iot-sdk-c

INC=-I $(AZURE_SDK)/iothub_client/inc \
	-I $(AZURE_SDK)/deps/umock-c/inc \
	-I $(AZURE_SDK)/c-utility/inc \
	-I $(AZURE_SDK)/deps/azure-macro-utils-c/inc

LIBS=$(AZURE_SDK)/cmake/iothub_client/libiothub_client_http_transport.a \
	$(AZURE_SDK)/cmake/iothub_client/libiothub_client_amqp_ws_transport.a \
	$(AZURE_SDK)/cmake/iothub_client/libiothub_client_amqp_transport.a \
	$(AZURE_SDK)/cmake/uamqp/libuamqp.a \
	$(AZURE_SDK)/cmake/c-utility/libaziotsharedutil.a \
	$(AZURE_SDK)/cmake/iothub_client/libiothub_client_mqtt_transport.a \
	$(AZURE_SDK)/cmake/iothub_client/libiothub_client_mqtt_ws_transport.a \
	$(AZURE_SDK)/cmake/umqtt/libumqtt.a \
	$(AZURE_SDK)/cmake/iothub_client/libiothub_client.a \
	$(AZURE_SDK)/cmake/iothub_client/libiothub_client_http_transport.a \
	$(AZURE_SDK)/cmake/iothub_client/libiothub_client_amqp_ws_transport.a \
	$(AZURE_SDK)/cmake/iothub_client/libiothub_client_amqp_transport.a \
	$(AZURE_SDK)/cmake/uamqp/libuamqp.a \
	$(AZURE_SDK)/cmake/iothub_client/libiothub_client_mqtt_transport.a \
	$(AZURE_SDK)/cmake/iothub_client/libiothub_client_mqtt_ws_transport.a \
	$(AZURE_SDK)/cmake/umqtt/libumqtt.a \
	$(AZURE_SDK)/cmake/c-utility/libaziotsharedutil.a \
	/usr/lib/arm-linux-gnueabihf/libcurl.so \
	/usr/lib/arm-linux-gnueabihf/libssl.so \
	/usr/lib/arm-linux-gnueabihf/libcrypto.so 

all : SimulatedDevice

SimulatedDevice : SimulatedDevice.c
	gcc -fPIC -Werror -o SimulatedDevice $(INC) SimulatedDevice.c $(LIBS) -lpthread -lm -lrt -luuid	$(AZURE_SDK)/cmake/libparson.a 

