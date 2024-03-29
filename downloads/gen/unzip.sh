cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-gmail/downloads/../p5projects"
#
echo unzip 1 "spiral walk-zaAsh0DZt"
rm -rf "./spiral walk-zaAsh0DZt"
mkdir "./spiral walk-zaAsh0DZt"
pushd "./spiral walk-zaAsh0DZt" > /dev/null
unzip -q "../../downloads/zips/spiral walk-zaAsh0DZt"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi