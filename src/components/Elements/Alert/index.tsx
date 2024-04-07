export interface IAlert {
    content: string;
    variant?: 'success' | 'warning' | 'fail' | 'normal';
    renderIcon?: Function;
    className?: string;
}

const Alert: React.FC<IAlert> = ({
    content,
    variant = 'normal',
    renderIcon,
    className,
}) => (
    <div
        className={`w-fit rounded-xl border p-4 text-center text-sm ${
            variant === 'success'
                ? 'bg-[#D1FAE5] text-[#097552]'
                : variant === 'warning'
                  ? 'bg-[#FAF7D1] text-[#736e0b]'
                  : variant === 'fail'
                    ? 'bg-[#FFE4E6] text-[#F43F5E]'
                    : 'bg-surface dark:bg-surface-dark'
        } ${className}`}
    >
        <div className="flex w-full items-center justify-around">
            {typeof renderIcon === 'function' && renderIcon()}
            <p className="ml-1">{content}</p>
        </div>
    </div>
);

export default Alert;
