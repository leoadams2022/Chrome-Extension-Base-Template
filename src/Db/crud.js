/* eslint-disable no-unused-vars */
import { db } from './Db'

//! CRUD - Create, Read, Update, Delete
export function createInIndexDb() {
  //! add to table
  const one = async () => {
    const tableName = 'friends'
    const data = { name: 'John', age: 20 }
    // resolves to id of the added document in the table
    await db[tableName].add(data)
  }
  //! bulk add to table
  const two = async () => {
    const tableName = 'friends'
    // need to be Array of objects to add
    const data = [
      { name: 'John', age: 20 },
      { name: 'John', age: 20 },
    ]
    // resolves to id of the last added document in the table
    await db[tableName].bulkAdd(data)
  }
}

export function readInIndexDb() {
  //! get the whole table
  const one = async () => {
    const tableName = 'friends'
    // resolves to an array of all the objects in the table
    await db[tableName].toArray()
  }

  //! gat object with query
  const two = async () => {
    const tableName = 'friends'
    const indexName = 'id'
    const value = '3'
    // resolves to an array of all the objects in the table
    await db[tableName].where(indexName).equals(value).toArray()

    //! where Query Methods
    /**
      //? above(lowerBound)
      Returns a collection of objects where index is above given key

      //? aboveOrEqual(lowerBound	)
      Returns a collection of objects where index is above or equal given key

      //? anyOf([Array of keys to look for])
      Returns a collection of objects where index is equal to any of the keys in given array

      //? anyOfIgnoreCase([Array of strings to look for])
      Returns a collection of objects where index matches any of given strings, ignoring case differences.

      //? below(upperBound)
      Returns a collection of objects where index is below given key

      //? belowOrEqual(upperBound)
      Returns a collection of objects where index is below or equal given key

      //? between(lowerBound, upperBound, includeLower, includeUpper)
      Returns a collection of objects where index is between given boundaries
      includeLower	Whether lowerBound should be included or not. Default: true. Specify 'false' explicitly if lowerBound should NOT be included in the results.
      includeUpper	Whether upperBound should be included or not. Default: false

      //? equals(key)
      Returns a collection of objects where index equals given key
      Objects are not accepted as valid keys. 
      key String comparisons are case sensitive.

      //? equalsIgnoreCase(key)
      Returns a collection of objects where index equals given string-key ignoring case differences
      Key to compare with. Must be a string

      //? inAnyRange(ranges, options)
      Returns a collection where index is within any of the given ranges.
      ranges	Array of Arrays defining ranges to search [[lowerBound, upperBound],...]
      options	Options of how to tread range starts and ends
      options.includeLowers	Whether lowerBound should be included or not. Default: true. Specify 'false' explicitly if lowerBound should NOT be included in the results.
      options.includeUppers	Whether upperBound should be included or not. Default: false
      // Give children and elders a rebate of 50%:
      db.customers.where('age')
        .inAnyRange([[0, 18], [65, Infinity]])
        .modify({Rebate: 1/2});

      //? noneOf([array of keys])
      Returns a collection where index equals anything but any of the keys in given array
      Array of keys to compare with. Each key MUST be a Number, String, Date or Array instance. Booleans are not accepted as valid keys

      //? notEqual(key)
      Returns a collection where index equals anything but given value
      Key to compare with. The key MUST be a Number, String, Date or Array instance. Booleans are not accepted as valid keys

      //? startsWith(prefix)
      Returns a collection of objects where index starts with given string-key
      Prefix to check for. Must be a string

      //? startsWithAnyOf([Array of prefixes (strings) to look for])
      Returns a collection of objects where index starts with any of the given strings
      

      //? startsWithIgnoreCase(prefix)
      Returns a collection of objects where index starts with given string-key ignoring case differences
      Prefix to look for. Must be a string

      //? startsWithAnyOfIgnoreCase([Array of prefixes (strings) to look for])
      Returns a collection of objects where index starts with any of given strings, ignoring case differences
     */
  }
}

export function updateInIndexDb() {
  //! overwrite an existing object If the object does not exist, then it will be added.
  const one = async () => {
    const tableName = 'friends'
    const data = { id: 4, name: 'Foo', age: 33 }
    // ? resolves to the key under which the object was stored in the table.
    await db[tableName].put(data)
  }
  //! bulk overwrite an existing object If the object does not exist, then it will be added.
  const two = async () => {
    const tableName = 'friends'
    // Array of objects to put
    const data = [
      { id: 4, name: 'Foo', age: 33 },
      { id: 5, name: 'Bar', age: 43 },
    ]
    // resolves with the resulting primary key of the object that was last in given array
    await db[tableName].bulkPut(data)
  }

  //! Updates an existing object in the object store with the given changes
  const three = async () => {
    const tableName = 'friends'
    const primaryKey = 4
    // Object containing the key paths to each property you want to change.
    const changes = { name: 'Bar' }
    // resolves to 1 if an object that matches the criteria was found and updated, regardless of whether the update affected the object or not, otherwise 0
    await db[tableName].update(primaryKey, changes)
  }
}

export function deleteInIndexDb() {
  //! Delete object from store
  const one = async () => {
    const tableName = 'friends'
    const primaryKey = 4
    // resolves successfully with an undefined result, no matter if a record was deleted or not.
    // Rejection happens if the provided key is not a valid key
    await db[tableName].delete(primaryKey)
  }
  //! Bulk delete objects from store
  const two = async () => {
    const tableName = 'friends'
    // Array of primary keys of the objects to delete
    const primaryKeyArray = [4, 5]
    // resolves successfully with an undefined result, no matter if a record was deleted or not.
    // Rejection happens if the provided key is not a valid key
    await db[tableName].bulkDelete(primaryKeyArray)
  }
}
