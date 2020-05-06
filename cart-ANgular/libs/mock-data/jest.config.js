module.exports = {
  name: 'mock-data',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/mock-data',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
