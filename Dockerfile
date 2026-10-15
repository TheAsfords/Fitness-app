# G.26 test (re-run after the replicas fix): builds fine, then stops at start on purpose. Removed again after the test.
FROM nginxinc/nginx-unprivileged:1.27.4-alpine
CMD ["sh","-c","echo G.26: this version stops at start on purpose; exit 1"]
