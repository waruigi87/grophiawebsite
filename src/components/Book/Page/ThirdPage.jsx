// Example.tsx
import  ClipFrame  from "./../Frame/ClipFrame";


const ThirdPage = () => {
  return (
    <div className="flex gap-6">
      {/* 元画像に近いカード */}
      <ClipFrame
        backgroundColorClass="bg-cyan-50"
        imageSrc="/images/sample1.jpg"
        imageAlt="農薬がいらない"
        className="absolute w-40"        // ← 位置を自由に
        style={{ top: "80px", left: "40px" }} // ← Tailwind で書けない単位も自由
        rotateClass="rotate-2"           // ← 少し傾ける
        >
        <h3 className="text-sky-500 font-bold text-base">農薬がいらない</h3>
        </ClipFrame>    

      {/* 色違い・レイアウト違いの例 */}
        <ClipFrame
        backgroundColorClass="bg-black-50"
        imageSrc="/images/sample1.jpg"
        imageAlt="農薬がいらない"
        className="absolute w-40"      
        style={{ top: "160px", left: "40px" }}
        rotateClass="rotate-4"   
        >
        <h3 className="text-sky-500 font-bold text-base">農薬がいらない</h3>
        </ClipFrame>
    </div>
  );
};

export default ThirdPage;