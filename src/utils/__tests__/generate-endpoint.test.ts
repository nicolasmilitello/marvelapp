import apiKey from "../../constants/endpoint-with-api-key";
import generateEndpoint from "../generate-endpoint";

describe("generateEndpoint function", () => {
  it("should return the correct url if characters are filtered by name through a search", () => {
    const queries = {
      search: {
        value: "spider",
        query_param: "nameStartsWith",
      },
      pagination: {
        value: 0,
        query_param: "offset",
      },
      comic: {
        value: 0,
        query_param: "comics",
      },
      story: {
        value: 0,
        query_param: "stories",
      },
    };

    const type = "characters";
    const url = generateEndpoint(queries, type);

    const generatedEndpoint = `https://gateway.marvel.com/v1/public/characters?${apiKey}&limit=12&nameStartsWith=spider`;

    expect(url).toBe(generatedEndpoint);
  });

  it("should return the correct url if characters are filtered by name and we want to see the second page", () => {
    const queries = {
      search: {
        value: "spider",
        query_param: "nameStartsWith",
      },
      pagination: {
        value: 10,
        query_param: "offset",
      },
      comic: {
        value: 0,
        query_param: "comics",
      },
      story: {
        value: 0,
        query_param: "stories",
      },
    };

    const type = "characters";
    const url = generateEndpoint(queries, type);

    const generatedEndpoint = `https://gateway.marvel.com/v1/public/characters?${apiKey}&limit=12&nameStartsWith=spider&offset=10`;

    expect(url).toBe(generatedEndpoint);
  });

  it("should return the correct url if comics are filtered by format", () => {
    const queries = {
      search: {
        value: "",
        query_param: "titleStartsWith",
      },
      pagination: {
        value: 0,
        query_param: "offset",
      },
      format: {
        value: "graphic novel" as "graphic novel",
        query_param: "format",
      },
    };

    const type = "comics";

    const url = generateEndpoint(queries, type);

    const generatedEndpoint = `https://gateway.marvel.com/v1/public/comics?${apiKey}&limit=12&format=graphic novel`;

    expect(url).toBe(generatedEndpoint);
  });
});
