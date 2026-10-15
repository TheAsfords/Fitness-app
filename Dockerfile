# G.25 test: this build fails on purpose. Removed again after the test.
FROM nginxinc/nginx-unprivileged:1.27.4-alpine
RUN echo "G.25: failing the build on purpose" && exit 1
