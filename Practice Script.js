var imageIndex = 1;
        var images = ['Image/0.jpg',
            'Image/1.1.jpg','Image/1.2.jpg','Image/1.3.jpg','Image/1.4.jpg',
            'Image/2.1.jpg','Image/2.2.jpg','Image/2.3.jpg','Image/2.4.jpg',
            'Image/3.1.jpg','Image/3.2.jpg','Image/3.3.jpg','Image/3.4.jpg',
            'Image/4.1.jpg','Image/4.2.jpg','Image/4.3.jpg','Image/4.4.jpg',
            'Image/5.1.jpg','Image/5.2.jpg','Image/5.3.jpg','Image/5.4.jpg',
            'Image/6.1.jpg','Image/6.2.jpg','Image/6.3.jpg','Image/6.4.jpg',
            'Image/7.1.jpg','Image/7.2.jpg','Image/7.3.jpg','Image/7.4.jpg',
            'Image/8.1.jpg','Image/8.2.jpg','Image/8.3.jpg','Image/8.4.jpg',
            'Image/9.1.jpg','Image/9.2.jpg','Image/9.3.jpg','Image/9.4.jpg',
            'Image/10.1.jpg','Image/10.2.jpg','Image/10.3.jpg','Image/10.4.jpg',
            'Image/11.1.jpg','Image/11.2.jpg','Image/11.3.jpg','Image/11.4.jpg',
            'Image/12.1.jpg','Image/12.2.jpg','Image/12.3.jpg','Image/12.4.jpg',
            'Image/13.1.jpg','Image/13.2.jpg','Image/13.3.jpg','Image/13.4.jpg',
            'Image/14.1.jpg','Image/14.2.jpg','Image/14.3.jpg','Image/14.4.jpg',
            'Image/15.1.jpg','Image/15.2.jpg','Image/15.3.jpg','Image/15.4.jpg',
            'Image/16.1.jpg','Image/16.2.jpg','Image/16.3.jpg','Image/16.4.jpg',
            'Image/17.1.jpg','Image/17.2.jpg','Image/17.3.jpg','Image/17.4.jpg',
            'Image/18.1.jpg','Image/18.2.jpg','Image/18.3.jpg','Image/18.4.jpg',
            'Image/19.1.jpg','Image/19.2.jpg','Image/19.3.jpg','Image/19.4.jpg',
            'Image/20.1.jpg','Image/20.2.jpg','Image/20.3.jpg','Image/20.4.jpg',
            'Image/21.1.jpg','Image/21.2.jpg','Image/21.3.jpg','Image/21.4.jpg',
            'Image/22.1.jpg','Image/22.2.jpg','Image/22.3.jpg','Image/22.4.jpg',
            'Image/23.1.jpg','Image/23.2.jpg','Image/23.3.jpg','Image/23.4.jpg',
            'Image/24.1.jpg','Image/24.2.jpg','Image/24.3.jpg','Image/24.4.jpg',
            'Image/25.1.jpg','Image/25.2.jpg','Image/25.3.jpg','Image/25.4.jpg',
            'Image/26.1.jpg','Image/26.2.jpg','Image/26.3.jpg','Image/26.4.jpg',
            'Image/27.1.jpg','Image/27.2.jpg','Image/27.3.jpg','Image/27.4.jpg',
            'Image/28.1.jpg','Image/28.2.jpg','Image/28.3.jpg','Image/28.4.jpg',
            'Image/29.1.jpg','Image/29.2.jpg','Image/29.3.jpg','Image/29.4.jpg',
            'Image/30.1.jpg','Image/30.2.jpg','Image/30.3.jpg','Image/30.4.jpg',
            'Image/31.1.jpg','Image/31.2.jpg','Image/31.3.jpg','Image/31.4.jpg',
            'Image/32.1.jpg','Image/32.2.jpg','Image/32.3.jpg','Image/32.4.jpg',
            'Image/33.1.jpg','Image/33.2.jpg','Image/33.3.jpg','Image/33.4.jpg',
            'Image/34.1.jpg','Image/34.2.jpg','Image/34.3.jpg','Image/34.4.jpg',
            'Image/35.1.jpg','Image/35.2.jpg','Image/35.3.jpg','Image/35.4.jpg',
            'Image/36.1.jpg','Image/36.2.jpg','Image/36.3.jpg','Image/36.4.jpg',
            'Image/37.1.jpg','Image/37.2.jpg','Image/37.3.jpg','Image/37.4.jpg',
            'Image/38.1.jpg','Image/38.2.jpg','Image/38.3.jpg','Image/38.4.jpg',
            'Image/39.1.jpg','Image/39.2.jpg','Image/39.3.jpg','Image/39.4.jpg',
            'Image/40.1.jpg','Image/40.2.jpg','Image/40.3.jpg','Image/40.4.jpg',
            'Image/41.1.jpg','Image/41.2.jpg','Image/41.3.jpg','Image/41.4.jpg',
            'Image/42.1.jpg','Image/42.2.jpg','Image/42.3.jpg','Image/42.4.jpg',
            'Image/43.1.jpg','Image/43.2.jpg','Image/43.3.jpg','Image/43.4.jpg',
            'Image/44.1.jpg','Image/44.2.jpg','Image/44.3.jpg','Image/44.4.jpg',
            'Image/45.1.jpg','Image/45.2.jpg','Image/45.3.jpg','Image/45.4.jpg',
            'Image/46.1.jpg','Image/46.2.jpg','Image/46.3.jpg','Image/46.4.jpg',
            'Image/47.1.jpg','Image/47.2.jpg','Image/47.3.jpg','Image/47.4.jpg',
            'Image/48.1.jpg','Image/48.2.jpg','Image/48.3.jpg','Image/48.4.jpg',
            'Image/49.1.jpg','Image/49.2.jpg','Image/49.3.jpg','Image/49.4.jpg',
            'Image/50.1.jpg','Image/50.2.jpg','Image/50.3.jpg','Image/50.4.jpg',
            'Image/51.1.jpg','Image/51.2.jpg','Image/51.3.jpg','Image/51.4.jpg',
            'Image/52.1.jpg','Image/52.2.jpg','Image/52.3.jpg','Image/52.4.jpg',
            'Image/53.1.jpg','Image/53.2.jpg','Image/53.3.jpg','Image/53.4.jpg',
            'Image/54.1.jpg','Image/54.2.jpg','Image/54.3.jpg','Image/54.4.jpg',
            'Image/55.1.jpg','Image/55.2.jpg','Image/55.3.jpg','Image/55.4.jpg',
            'Image/56.1.jpg','Image/56.2.jpg','Image/56.3.jpg','Image/56.4.jpg',
            'Image/57.1.jpg','Image/57.2.jpg','Image/57.3.jpg','Image/57.4.jpg',
            'Image/58.1.jpg','Image/58.2.jpg','Image/58.3.jpg','Image/58.4.jpg',
            'Image/59.1.jpg','Image/59.2.jpg','Image/59.3.jpg','Image/59.4.jpg',
            'Image/60.1.jpg','Image/60.2.jpg','Image/60.3.jpg','Image/60.4.jpg',
            'Image/61.jpg']; // 0 & 61 start & stop images. .1 & .3 masks. .2 fixation. .4 array.
            var startTime;
            var results = "";
            var caseNumber;
            var startButton = document.getElementById("start-button");
            var timeoutID;
    
            function start() {
              caseNumber = document.getElementById("case-number").value;
              startButton.disabled = true; // Disable the start button once it's clicked
              showImage(images[imageIndex]);
          }
      
          function showImage(image) {
              document.getElementById("image").src = image;

              if (imageIndex === 2 || imageIndex === 6 || imageIndex === 10 || imageIndex === 14 || imageIndex === 18 || imageIndex === 22 ||
                  imageIndex === 26 || imageIndex === 30 || imageIndex === 34 || imageIndex === 38 || imageIndex === 42 || imageIndex === 46 ||
                  imageIndex === 50 || imageIndex === 54 || imageIndex === 58 || imageIndex === 62 || imageIndex === 66 || imageIndex === 70 ||
                  imageIndex === 74 || imageIndex === 78 || imageIndex === 82 || imageIndex === 86 || imageIndex === 90 || imageIndex === 94 ||
                  imageIndex === 98 || imageIndex === 102 ||imageIndex === 106 || imageIndex === 110 || imageIndex === 114 || imageIndex === 118 ||
                  imageIndex === 122 || imageIndex === 126 || imageIndex === 130 || imageIndex === 134 || imageIndex === 138 || imageIndex === 142 ||
                  imageIndex === 146 || imageIndex === 150 || imageIndex === 154 || imageIndex === 158 || imageIndex === 162 || imageIndex === 166 ||
                  imageIndex === 170 || imageIndex === 174 || imageIndex === 178 || imageIndex === 182 || imageIndex === 186 || imageIndex === 190 ||
                  imageIndex === 194 || imageIndex === 198 || imageIndex === 202 || imageIndex === 206 || imageIndex === 210 || imageIndex === 214 ||
                  imageIndex === 218 || imageIndex === 222 || imageIndex === 226 || imageIndex === 230 || imageIndex === 234 || imageIndex === 238) {
                    setTimeout(function() {
                        imageIndex++;
                        nextImage(); // jumps to the next image
                    }, 250); // fixation image time
                    
                } else if (imageIndex === 3 || imageIndex === 7 || imageIndex === 11 || imageIndex === 15 || imageIndex === 19 || imageIndex === 23 ||
                           imageIndex === 27 || imageIndex === 31 || imageIndex === 35 || imageIndex === 39 || imageIndex === 43 || imageIndex === 47 ||
                           imageIndex === 51 || imageIndex === 55 || imageIndex === 59 || imageIndex === 63 || imageIndex === 67 || imageIndex === 71 ||
                           imageIndex === 75 || imageIndex === 79 || imageIndex === 83 || imageIndex === 87 || imageIndex === 91 || imageIndex === 95 ||
                           imageIndex === 99 || imageIndex === 103 || imageIndex === 107 || imageIndex === 111 || imageIndex === 115 || imageIndex === 119 ||
                           imageIndex === 123 || imageIndex === 127 || imageIndex === 131 || imageIndex === 135 || imageIndex === 139 || imageIndex === 143 ||
                           imageIndex === 147 || imageIndex === 151 || imageIndex === 155 || imageIndex === 159 || imageIndex === 163 || imageIndex === 167 ||
                           imageIndex === 171 || imageIndex === 175 || imageIndex === 179 || imageIndex === 183 || imageIndex === 187 || imageIndex === 191 ||
                           imageIndex === 195 || imageIndex === 199 || imageIndex === 203 || imageIndex === 207 || imageIndex === 211 || imageIndex === 215 ||
                           imageIndex === 219 || imageIndex === 223 || imageIndex === 227 || imageIndex === 231 || imageIndex === 235 || imageIndex === 239) {
                    setTimeout(function() {
                        imageIndex++;
                        nextImage();
                    }, 250); // 2nd mask time

                } else if (imageIndex === 5 || imageIndex === 9 || imageIndex === 13 || imageIndex === 17 || imageIndex === 21 || imageIndex === 25 ||
                           imageIndex === 29 || imageIndex === 33 || imageIndex === 37 || imageIndex === 41 || imageIndex === 45 || imageIndex === 49 ||
                           imageIndex === 53 || imageIndex === 57 || imageIndex === 61 || imageIndex === 65 || imageIndex === 69 || imageIndex === 73 ||
                           imageIndex === 77 || imageIndex === 81 || imageIndex === 85 || imageIndex === 89 || imageIndex === 93 || imageIndex === 97 ||
                           imageIndex === 101 || imageIndex === 105 || imageIndex === 109 || imageIndex === 113 || imageIndex === 117 || imageIndex === 121 ||
                           imageIndex === 125 || imageIndex === 129 || imageIndex === 133 || imageIndex === 137 || imageIndex === 141 || imageIndex === 145 ||
                           imageIndex === 149 || imageIndex === 153 || imageIndex === 157 || imageIndex === 161 || imageIndex === 165 || imageIndex === 169 ||
                           imageIndex === 173 || imageIndex === 177 || imageIndex === 181 || imageIndex === 185 || imageIndex === 189 || imageIndex === 193 ||
                           imageIndex === 197 || imageIndex === 201 || imageIndex === 205 || imageIndex === 209 || imageIndex === 213 || imageIndex === 217 ||
                           imageIndex === 221 || imageIndex === 225 || imageIndex === 229 || imageIndex === 233 || imageIndex === 237 || imageIndex === 241) {
                    setTimeout(function() {
                        imageIndex++;
                        nextImage();
                    }, 250); // 1st Mask time

                } else if (imageIndex === 4 || imageIndex === 8 || imageIndex === 12 || imageIndex === 16 || imageIndex === 20 || imageIndex === 24 ||
                          imageIndex === 28 || imageIndex === 32 || imageIndex === 36 || imageIndex === 40 || imageIndex === 44 || imageIndex === 48 ||
                          imageIndex === 52 || imageIndex === 56 || imageIndex === 60 || imageIndex === 64 || imageIndex === 68 || imageIndex === 72 ||
                          imageIndex === 76 || imageIndex === 80 || imageIndex === 84 || imageIndex === 88 || imageIndex === 92 || imageIndex === 96 ||
                          imageIndex === 100 || imageIndex === 104 || imageIndex === 108 || imageIndex === 112 || imageIndex === 116 || imageIndex === 120 ||
                          imageIndex === 124 || imageIndex === 128 || imageIndex === 132 || imageIndex === 136 || imageIndex === 140 || imageIndex === 144 ||
                          imageIndex === 148 || imageIndex === 152 || imageIndex === 156 || imageIndex === 160 || imageIndex === 164 || imageIndex === 168 ||
                          imageIndex === 172 || imageIndex === 176 || imageIndex === 180 || imageIndex === 184 || imageIndex === 188 || imageIndex === 192 ||
                          imageIndex === 196 || imageIndex === 200 || imageIndex === 204 || imageIndex === 208 || imageIndex === 212 || imageIndex === 216 ||
                          imageIndex === 220 || imageIndex === 224 || imageIndex === 228 || imageIndex === 232 || imageIndex === 236 || imageIndex === 240) {
                    startTime = Date.now(); //records the time
                    timeoutID = setTimeout(function() {
                        handleNoResponse(); // Handle "no response" when the timeout occurs
                        
                        imageIndex++;
                        nextImage();
                    }, 1000); // array image time
                    document.addEventListener("keydown", handleKeyPress);
                    
                } else if (imageIndex === 1 ||imageIndex === 242) {
                    setTimeout(function() {
                        imageIndex++;
                        nextImage();
                    }, 2000); 
                }
              }
        
              function nextImage() {
                  if (imageIndex <= images.length - 1) {
                      document.removeEventListener("keydown", handleKeyPress); // Remove the event listener before moving to the next slide
                      showImage(images[imageIndex]);
                  } else {
                      download();
                  }
              }
              function handleKeyPress(event) {
                var responseTime = Date.now() - startTime;
                results += "image "+imageIndex + " RT " + responseTime + " ms key "+ event.key + "\n";
              
                clearTimeout(timeoutID);
                imageIndex++;
                nextImage();
              }
                            
              function handleNoResponse() {
                var responseTime = Date.now - startTime; // not necessary
                results += "image " + imageIndex + " RT " + "timeout\n";

                document.removeEventListener("keydown", handleKeyPress); // Remove the event listener
              }
              
              function download() {
                var blob = new Blob([results], {type: "text/plain;charset=utf-8"});
                saveAs(blob, "Results of " + caseNumber + "_Practice.txt");
              }