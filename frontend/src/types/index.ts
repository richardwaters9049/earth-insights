// This file flattens and re-exports useful types from the OpenAPI-generated file
import type { components } from "./api";

/**
 * Represents a single environmental data point returned by the backend.
 * Includes a timestamp and a numerical measurement value.
 */
export type DataPoint = components["schemas"]["DataPoint"];
