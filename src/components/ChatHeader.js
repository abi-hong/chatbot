// sticky header 만들기
const headerStyle = {
    height: "40px",
    position: "sticky",
    top: 0,
    background: "teal",
    color: "white",
    paddingLeft: "32px",
    paddingRight: "32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}
const headerTitle = {
    listStyleType: "none",
    padding: "0",
}
const headerBtn = {
    display: "inline-block",
    marginLeft: "16px",
    fontSize: "18px",
    fontWeight: "bold",

}

export default function ChatHeader() {
    return (
        <div style={headerStyle}>
            <div style={headerTitle}>Chatbot</div>
            <div style={headerBtn}>
                <input type="button" value="상담종료" />
            </div>
        </div>
    );
}