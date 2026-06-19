interface Props {
    username: string;
}

const UserInfo = ({ username }: Props) => {
    return (
        <div>
            <div
                style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "gray"
                }}
            />

            <span>{username}</span>
        </div>
    );
};

export default UserInfo;