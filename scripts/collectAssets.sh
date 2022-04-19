#!/bin/bash

# Copies various assets from the site's labs into SvelteKit's static resources
# directory, so they can actually be fetched

ASSETS_PATH="static"

mkdir -p "${ASSETS_PATH}/labs/handshake/package"
cp node_modules/handshake/assets/* "${ASSETS_PATH}/labs/handshake/package"
