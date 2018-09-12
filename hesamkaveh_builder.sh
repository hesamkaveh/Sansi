cd /projects/hesamkaveh_UI &&
git pull &&
yarn &&
gatsby build &&
sudo rm -Rf /home/admin/web/hesamkaveh.com/public_html/* &&
mv /projects/hesamkaveh_UI/public/* /home/admin/web/hesamkaveh.com/public_html/