import Link from 'next/link';

export default function HeaderSection() {
  return (
    <section className="bg-white px-6 py-16 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* 헤드라인 */}
        <div className="mb-10">
          <h1
            className="text-3xl md:text-4xl lg:text-7xl font-extrabold leading-tight 
            bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 
            bg-clip-text text-transparent"
          >
            50만원으로 단 3일만에
          </h1>
          <h2 className="text-2xl mt-3 md:text-3xl lg:text-7xl font-extrabold text-gray-800">
            고퀄의 30초 영상 제작
          </h2>
        </div>
        {/* 서브헤드라인 */}
        <div className="w-full flex justify-center">
          <div className="w-[800px] bg-gray-50 rounded-3xl py-10">
            {/* 질문 */}
            <p className="text-4xl font-medium text-gray-900 pb-5">
              고객님은 뭘 해주셔야 하냐구요?
            </p>

            {/* 설명 + 형광펜 강조 */}
            <div className="text-2xl text-gray-800 leading-relaxed">
              <p>아무 것도 하실 필요 없습니다.</p>
              <p>
                <span className="text-2xl bg-indigo-100 px-1">
                  전문 기획자가 연락드리고 다 알아서 해 드립니다!
                </span>
              </p>
              {/* 안내문구 */}
              <p className="text-sm text-gray-500 pt-8">
                ※ 꼭 포함시키고 싶은 이미지나 영상이 있을 경우 전달해 주시면
                됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="pt-10">
          <Link
            href="#portfolio"
            className="inline-block text-2xl font-light px-20 py-6 rounded-full
    bg-[#0076FF] text-white hover:brightness-125 transition"
          >
            지금 신청하기
          </Link>
        </div>
      </div>
    </section>
  );
}
