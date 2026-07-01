# Stage 1: Build — compiler lives here, gets thrown away after
FROM golang:1.25-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -o devboard-backend .

# Stage 2: Run — only your binary, nothing else
FROM alpine:3.21
RUN apk update && apk upgrade --no-cache
RUN adduser -D -u 10001 app
WORKDIR /app
COPY --from=builder /app/devboard-backend .
RUN chown -R app:app /app
USER app
EXPOSE 8080
ENTRYPOINT ["./devboard-backend"]