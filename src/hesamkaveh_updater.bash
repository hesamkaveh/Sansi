#!/usr/bin/env bash
cd /projects/hesamkaveh_UI/
git pull
echo "repository updated(1/4)"
npm i
echo "node packages updated(2/4)"
gatsby build
echo "new build completed(3/4)"
mv public  /home/admin/web/hesamkaveh.com/public_html
echo "site updated(4/4)"
echo ""
echo ""
echo ""