import { createContext, useState } from "react";
type FavoritesState = Set<string>;
interface FavoritesContext {
  favorites: FavoritesState;
  addFavorite: (id: string) => void;
  deleteFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContext>({
  // Is it the practive of initiate a context?
  favorites: new Set<string>(),
  addFavorite: (id: string) => {},
  deleteFavorite: (id: string) => {},
  isFavorite: (id: string) => false,
});

export function FavoritesContextProvider(props: React.PropsWithChildren) {
  const [favorites, setFavorites] = useState<FavoritesState>(new Set<string>());

  function addFavorite(id: string) {
    setFavorites((prev) => {
      const newState = new Set(prev);
      newState.add(id);
      return newState;
    });
  }

  function deleteFavorite(id: string) {
    setFavorites((prev) => {
      const newState = new Set(prev);
      newState.delete(id);
      return newState;
    });
  }

  function isFavorite(id: string) {
    return favorites.has(id);
  }
  const context: FavoritesContext = {
    favorites,
    addFavorite,
    deleteFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
