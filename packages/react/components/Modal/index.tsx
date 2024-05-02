import "./index.css";

export function Modal(props: any) {
    var defaultProps = {
        //默认属性
        bg: "rgba(0,0,0,.5)",
    };
    var datas = Object.assign({}, defaultProps, props);
    console.log(datas)

    return (
        <div
            onClick={(e) => {
                if ((e.target as any).className === "modal") {
                    //去除事件冒泡
                    datas.onClose(); //自己不做处理，抛出一个事件,这点非常重要
                }
            }}
            className="modal"
            style={{
                background: datas.bg,
            }}
        >
            <div className="modal-center1">{datas.children}</div>
        </div>
    );
}
