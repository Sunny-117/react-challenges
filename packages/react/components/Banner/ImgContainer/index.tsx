import React, { Component } from "react";


export default class ImgContainer extends Component<any, any> {
    containerRef = (el) => {
        this.div = el;
    };
    //计时器的间隔时间
    tick = 16;

    timer = null; //计时器序号

    /**
     * 切换到第几张图片
     * 调用该函数，此组件会经过一段动画完成切换
     * @param {*} index 图片下标，从0开始
     */
    switchTo(index) {
        //设置正确的index
        if (index < 0) {
            index = 0;
        } else if (index > this.props.imgSrcs.length - 1) {
            index = this.props.imgSrcs.length - 1;
        }
        //1. 根据index，计算div的最终的marginLeft
        const targetLeft = -index * this.props.imgWidth;
        //2. 得到当前的marginLeft
        let curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft);
        //3. 计算运动的次数
        const times = Math.ceil(this.props.duration / this.tick);
        let curTimes = 0; //当前运动的次数
        //4. 计算每次运动的距离
        const totalDis = targetLeft - curLeft; //总距离
        const dis = totalDis / times; //每次运动的距离
        //先停止之前的动画
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            curTimes++;
            curLeft += dis;
            this.div.style.marginLeft = curLeft + "px";
            if (curTimes === times) {
                //停止运动
                this.div.style.marginLeft = targetLeft + "px"; //防止不精确的小数，精确控制
                clearInterval(this.timer);
            }
        }, this.tick);
    }

    render() {
        const imgs = this.props.imgSrcs.map((src, i) => (
            <img
                src={src}
                key={i}
                alt=""
                style={{
                    width: this.props.imgWidth,
                    height: this.props.imgHeight,
                    float: "left", // 防止空白折叠，白边，浮动变成块盒
                }}
            />
        ));
        return (
            <div
                ref={this.containerRef}
                style={{
                    width: this.props.imgSrcs.length * this.props.imgWidth,
                    height: this.props.imgHeight,
                }}
            >
                {imgs}
            </div>
        );
    }
}
