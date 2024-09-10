import { Injectable } from '@nestjs/common';

const apiKey = process.env.API_KEY;

@Injectable()
export class CatsService {
  async getCats() {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=15`,
        {
          headers: { 'x-api-key': apiKey || '' },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching all cats:', error);
    }
  }
}
