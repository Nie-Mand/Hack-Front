export default function Sponsors() {
  const sponsors = [
    '/assets/logo.png',
    '/assets/sfbt.png',
    '/assets/4c.gif',
    '/assets/gh.png',
    '/assets/press.png',
  ]

  return (
    <div className="w-1/2 mx-auto my-5">
      <h1 className="text-gray-400 text-center text-lg font-bold">
        Sponsored By
      </h1>
      <div
        className="flex gap-x-5 gap-y-5 mt-4 text-center justify-center"
        style={{ flexWrap: 'wrap' }}
      >
        {sponsors.map((sponsor, idx) => (
          <img
            className="inline-block"
            key={idx}
            src={sponsor}
            style={{
              height: '70px',
              borderRadius: '5px',
              width: 'auto',
              flexBasis: '33px',
            }}
          ></img>
        ))}
      </div>
    </div>
  )
}
