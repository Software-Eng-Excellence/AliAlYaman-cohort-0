import { PetBuilder } from '../../../src/model/builders/Pet.builder';
import { Pet } from '../../../src/model/Pet.model';

describe('PetBuilder', () => {
    it('should build a Pet object with all properties set', () => {
        const pet = new PetBuilder()
            .setName('Buddy')
            .setPrice(100)
            .setDescription('Friendly dog')
            .setSpecies('Dog')
            .setBreed('Labrador')
            .setAge(3)
            .setGender('Male')
            .setColor('Yellow')
            .setHealthStatus('Healthy')
            .build();

        expect(pet).toBeInstanceOf(Pet);
        expect(pet).toEqual({
            name: 'Buddy',
            price: 100,
            description: 'Friendly dog',
            species: 'Dog',
            breed: 'Labrador',
            age: 3,
            gender: 'Male',
            color: 'Yellow',
            healthStatus: 'Healthy'
        });
    });

    it('should throw an error if a required field is missing', () => {
        expect(() => {
            new PetBuilder()
                .setName('Buddy')
                .setPrice(100)
                .setDescription('Friendly dog')
                .setSpecies('Dog')
                .setBreed('Labrador')
                .setAge(3)
                .setGender('Male')
                .setColor('Yellow')
                .build();
        }).toThrow('Missing required field');
    });

});