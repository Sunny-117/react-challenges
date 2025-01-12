
import "./Modal.css";
export function CModal({ show }: { show: boolean }) {
    if (!show) {
        return null;
    }
    return (
        <div className="modal">
            <p>加载中....</p>
        </div>
    );
}
