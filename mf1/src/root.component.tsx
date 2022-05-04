export default function Root(props) {
  return <section>
    <h1
      style={{
        color: 'red',
      }}
    >By Christian Burbano</h1>
    {props.name} is mounted
    by Christian Burbano!</section>;
}
