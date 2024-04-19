cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-gmail/downloads/../p5projects"
#
echo unzip 1 "video radial perlin pix-Aap84EcU_"
rm -rf "./video radial perlin pix-Aap84EcU_"
mkdir "./video radial perlin pix-Aap84EcU_"
pushd "./video radial perlin pix-Aap84EcU_" > /dev/null
unzip -q "../../downloads/zips/video radial perlin pix-Aap84EcU_"
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