import { FunctionComponent, useMemo, useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import { ALGOLIA_INDEX } from "@swirl/lib/search";
import { Autocomplete } from "./AutoComplete";

function createAlgoliaClient() {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!!,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!!
  );

  return searchClient;
}

// Initialize the Algolia client
export const searchClient = createAlgoliaClient();

interface FCProps {}

export const AlgoliaSearch: FunctionComponent<FCProps> = () => {
  const [searchState] = useState({
    query: "",
  });
  const plugins = useMemo(() => {
    return []; // add more plugins here
  }, []);
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX.DEV}>
        <Autocomplete
          placeholder="Search"
          initialState={{
            query: searchState.query,
          }}
          openOnFocus={true}
          plugins={plugins}
          defaultActiveItemId={0}
        />
      </InstantSearch>
    </>
  );
};
