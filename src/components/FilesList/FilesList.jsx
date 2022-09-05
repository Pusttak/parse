import { List, File } from './FilesList.styled';
import { dataList } from 'data';
import ApiGetFile from 'services/api';

const FilesList = ({ setNewFile }) => {
  const handleClick = async ({ name, link }) => {
    const data = await ApiGetFile(link);
    setNewFile(prev => {
      return prev?.name !== name
        ? {
            name,
            data,
          }
        : prev;
    });
  };

  return (
    <List>
      {dataList.map(({ name, link }) => (
        <li key={name}>
          <File
            type="button"
            name={name}
            onClick={() => handleClick({ name, link })}
          >
            {name}
          </File>
        </li>
      ))}
    </List>
  );
};

export default FilesList;
