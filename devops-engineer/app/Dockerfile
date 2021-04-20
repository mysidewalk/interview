FROM python:3.8-slim-buster

# Create a group and non root user to run our app
ARG APP_USER=appuser

RUN groupadd -r ${APP_USER} && useradd --no-log-init -r -g ${APP_USER} ${APP_USER}

# switch to the /app dir to work in
WORKDIR /app

# Copy the files needed to make our app work 
COPY --chown=${APP_USER}:${APP_USER} . .

# install all requirements 
RUN pip3 install -r requirements.txt

# Switch from root to appuser
USER ${APP_USER}

#Run the flask application 
CMD [ "python3", "server.py"]
