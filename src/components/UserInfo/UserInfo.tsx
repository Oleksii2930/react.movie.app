import "./UserInfo.css"
interface Props {
    username: string;
}

const UserInfo = ({ username }: Props) => {
    return (
        <div>
            <div className="infoWrapper"/>
            <span>{username}</span>
        </div>
    );
};

export default UserInfo;