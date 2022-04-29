interface ListProps {
  tasks: string[];
}

export default function List({ tasks }: ListProps) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}
