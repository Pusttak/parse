import {} from './FilesList.styled';
import { dataList } from 'data';
import ApiGetFile from 'services/api';

const FilesList = ({ setNewFile }) => {
  const handleClick = async ({ name, link }) => {
    const data = await ApiGetFile(link);
    // setNewFile(prev => {
    //   return prev?.name !== name ? { name, link } : prev;
    // });
    setNewFile({
      name,
      data,
    });
  };

  return (
    <ul>
      {dataList.map(({ name, link }) => (
        <li key={name}>
          <button
            type="button"
            name={name}
            onClick={() => handleClick({ name, link })}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilesList;
