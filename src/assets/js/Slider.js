class SarsSlider {
  constructor(sliderDom, values, initNum = 0) {
    this.sliderDom = sliderDom;
    this.values = values;
    this.sliderNum = 0;
    this.maxNum = 0;
    this.ball = null;
    this.line = null;
    this.rankValue = initNum;
  }

  setHtml(markNum){
    this.sliderDom.append(`
      <div class="sliderCont"><span></span></div>
      <div class="sliderLine"></div>
      <div class="numSide"></div>`
    );

    this.line = this.sliderDom.find(".sliderCont");
    this.ball = this.line.find("span");

    this.values.map((item, i) => {
      this.sliderDom.find(".numSide").append(`<span style='left:${i * markNum}px'>${item}</span>`);
    })
  }

  SliderInit(){
    this.maxNum = this.sliderDom.width();
    let markNum = this.maxNum / (this.values.length - 1);
    this.setHtml(markNum);
    this.line.css({"width": `${this.maxNum - this.rankValue * markNum}px`});
    this.ball.on("touchmove",(e) => {
      let moveNum = e.touches[0].clientX > this.maxNum ? this.maxNum : e.touches[0].clientX;
          moveNum = moveNum < 0 ? 0 : moveNum;
      this.sliderNum = moveNum;
      this.line.css({"transition": "none","width": `${Math.round(100 - moveNum/this.maxNum*100)}%`});
      return false;
    }).on("touchend",(e) => {
        jQuery(this).off('touchstart','touchmove');
        let rank = Math.floor(this.sliderNum / markNum);
        let rest = this.sliderNum % markNum > markNum /2 ? 1 : 0;
        this.rankValue = rank + rest;
        this.line.css({"transition": "width .5s","width": `${this.maxNum - this.rankValue * markNum}px`});
    });
  }

  getValue(){
    return this.rankValue;
  }
}

//let values = ["¥10000", "¥10000", "¥10000", "¥10000"];
export default SarsSlider;

//$(function(){
//var demo = new SarsSlider($("#mySlider"), values, 2);
//demo.SliderInit();
//console.log(demo.getValue());
//});
