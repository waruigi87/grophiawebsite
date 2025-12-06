import React from 'react';

const ClipFrame = ({
    backgroundColorClass = 'bg-cyan-50',
    className = '',
    rotateClass = '',
    imageSrc,
    imageAlt,
    style,
    children,
}) => {
    return (
        <div
            className={[
                'relative',
                'aspect-[3/4]',
                'rounded-2xl',
                'shadow-sm',
                rotateClass, // ← 外部から rotate を反映
                className, // ← 外部から位置・サイズを指定
            ].join(' ')}
            style={style} // ← Tailwind では足しにくい left/top などを外部から渡す
        >
            {/* ピン */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-800" />

            {/* カード本体 */}
            <div
                className={[
                    'relative w-full h-full rounded-2xl border-2 border-dashed',
                    'border-sky-50/60 box-border pt-16 px-4 pb-4',
                    backgroundColorClass,
                ].join(' ')}
            >
                {/* イメージ（丸枠） */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                    {imageSrc && (
                        <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
                    )}
                </div>

                {/* 中身 */}
                <div className="w-full h-full flex flex-col items-center justify-center text-center gap-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ClipFrame;
