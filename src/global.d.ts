
declare global {
  interface Window {
    Handlebars?: any;
    CeresTemplate?: (data: any) => string; // Currently loaded template function
    CeresTemplateDataMapper?: (payload: Record<string, unknown>) => Record<string, unknown>;
    CeresWidgets?: any;
  }
}

export { };
