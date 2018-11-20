cd /projects/hesamkaveh_ui &&
git pull &&
rm -Rf .cache public node_modules &&
yarn &&
gatsby build &&
sudo rm -Rf /home/admin/web/hesamkaveh.com/public_html/* &&
mv /projects/hesamkaveh_ui/public/* /home/admin/web/hesamkaveh.com/public_html/