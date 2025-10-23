

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://static.wikia.nocookie.net/sctv/images/c/c8/7EAB2C30-415A-4192-A3C7-FC01E2062BE9.jpeg',
    imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}