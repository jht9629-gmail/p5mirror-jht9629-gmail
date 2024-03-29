cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-gmail/downloads/../p5projects"
#
echo unzip 1 "MazeSpin liberation screens-4pgECdEVG"
rm -rf "./MazeSpin liberation screens-4pgECdEVG"
mkdir "./MazeSpin liberation screens-4pgECdEVG"
pushd "./MazeSpin liberation screens-4pgECdEVG" > /dev/null
unzip -q "../../downloads/zips/MazeSpin liberation screens-4pgECdEVG"
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