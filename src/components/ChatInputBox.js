// sticky bottom 만들기
const bottomStyle = {
    position: "sticky",
    bottom: "0",
    background: "gray",
    color: "white",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
}
const bottomAddBtn = {
    background: "black",
    width: "32px",
    height: "32px",
}
const bottomInput = {
    width: "100%",
    display: "inline-block",
    padding: "0",

}

// 엔터 누르면 전송되도록
export default function ChatInputBox() {
    return (
        <div style={bottomStyle}>
            <button style={bottomAddBtn}></button>
            <textarea style={bottomInput}></textarea>
        </div>
    );
}