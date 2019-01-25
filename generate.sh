#!/bin/bash
echo "generate javascript class from .proto file"
echo "do not forgot to add eslint-disable"

protoc -I=protos echo.proto \
--js_out=import_style=commonjs:src/generated \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/generated

protoc -I=protos echo.proto \
--js_out=import_style=commonjs+dts:src/generated \
--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:src/generated


# # Path to this plugin 
# PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
 
# # Directory to write generated code to (.js and .d.ts files) 
# OUT_DIR="./generated2"
 
# protoc \
#     --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#     --js_out="import_style=commonjs,binary:${OUT_DIR}" \
#     --ts_out="service=true:${OUT_DIR}" \
#     -I ./protos \
#     protos/*.proto

# https://github.com/improbable-eng/grpc-web/blob/master/client/grpc-web/docs/code-generation.md