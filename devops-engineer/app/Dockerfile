FROM python:3.8-slim-buster

# Create a group and user to run our app
ARG APP_USER=appuser
ARG CONTAINER_PORT
RUN groupadd -r ${APP_USER} && useradd --no-log-init -r -g ${APP_USER} ${APP_USER}

# set the FLASK_APP ENV to the given flask python script
ENV FLASK_APP=server.py

# switch to the /app dir where the flask app is located
WORKDIR /app

# Copy the files needed to make our app work 
COPY --chown=${APP_USER}:${APP_USER} . .

# install all requirements 
RUN pip3 install -r requirements.txt

# Switch from root to appuser
USER ${APP_USER}

#Run the flask application 
CMD [ "python3", "server.py"]
