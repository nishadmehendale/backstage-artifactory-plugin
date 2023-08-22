export interface Config {
    /**
   * Configuration options for the artifactory plugin
   * @see http://stagecentral.io/docs/features/artifactory/configuration
   */
    artifactory: {
      /**
       * @visibility frontend
       */
      url: string;
  
      user: string;
      /**
       * @visibility secret
       */
      password: string;
    };
}

  
