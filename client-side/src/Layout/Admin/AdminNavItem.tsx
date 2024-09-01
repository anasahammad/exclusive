import { IconType } from "react-icons";

interface AdminNavItemProps{
  Selected?: boolean;
  icon : IconType;
  label: string;
}
const AdminNavItem : React.FC<AdminNavItemProps> = ({Selected, icon:Icon, label}) => {
    return (
        <div className={`flex justify-center items-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 cursor-pointer ${Selected ? 'border-b-slate-800 text-slate-800' : 'border-b-transparent text-slate-500'}`}>
            <Icon size={20}/>
            <div className="font-medium text-sm text-center break-normal">{label}</div>
        </div>
    );
};

export default AdminNavItem;