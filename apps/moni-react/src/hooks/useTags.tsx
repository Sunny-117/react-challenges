import { useState, useEffect } from "react";
import createId from "lib/createId";
import useUpdate from "hooks/useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        {
          id: createId(),
          name: "衣",
        },
        {
          id: createId(),
          name: "食",
        },
        {
          id: createId(),
          name: "住",
        },
        {
          id: createId(),
          name: "行",
        },
      ];
    }
    setTags(localTags)
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, tags);
  // TODO 404
  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let index = 0; index < tags.length; index++) {
      if (tags[index].id === id) {
        result = index;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, { name }: { name: string }) => {
    setTags(
      tags.map((tag) => {
        return tag.id === id ? { id, name } : tag;
      })
    );
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt("新标签的名称为");
    if (tagName !== null && tagName !== '') {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };
  const getTagName = (id: number) => {
    const tag = tags.filter(tag => tag.id === id)[0]
    return tag ? tag.name : ''
  }
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    findTagIndex,
    deleteTag,
    addTag,
    getTagName
  };
};

export default useTags;
