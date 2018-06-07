FROM atmosphere/base:latest

ENV LANG="C.UTF-8" \
JAVA_HOME="/usr/lib/jvm/java" \
JRE_HOME="/usr/lib/jvm/jre"

#for nodejs and npm
ENV NODE_VERSION 8.11.2
ENV NPM_VERSION 6.1.0
ENV NPM_CONFIG_LOGLEVEL info

# Refresh package cache, followed by install openjdk jre and jdk
RUN dnf -q makecache && \
    dnf -y update libsolv && \
    dnf -y install java-1.8.0-openjdk java-1.8.0-openjdk-devel npm bzip2 xz&& \
    dnf upgrade -y '*nss*' && \
    dnf clean all ; \
    curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
    && tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs ; \
    npm install -g npm@"${NPM_VERSION}" ; \
    npm install -g @angular/cli ; \
    mkdir -p /usr/tcta

EXPOSE 8080

#CMD ["bin/domain-server"]
