import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { IntervalController } from '../../intervals/interval.controller';
//import "reflect-metadata";
import { IntervalService } from '../../intervals/interval.service';
import { Interval } from '../../intervals/interval.entity';
import { EnumIntervalType } from 'src/common/types';

describe('IntervalController', () => {
    let app: INestApplication;
    let intervalService = {
        findAll: jest.fn().mockResolvedValue([]),
        getIntervalsByType: jest.fn().mockResolvedValue([]),
        getIntervalByStartMYA: jest.fn().mockResolvedValue([]),
    };

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            controllers: [IntervalController],
            providers: [
                {
                    provide: IntervalService,
                    useValue: intervalService,
                },
            ],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/GET /test', () => {
        return request(app.getHttpServer())
            .get('/api/v1/intervals/test')
            .expect(200)
            .expect('Test String');
    });

    it('/GET /ping', () => {
        return request(app.getHttpServer())
            .get('/api/v1/intervals/ping')
            .expect(200)
            .expect((res) => {
                expect(Number(res.text)).toBeGreaterThan(0);
            });
    });

    it('/GET /', () => {
        return request(app.getHttpServer())
            .get('/api/v1/intervals')
            .expect(200)
            .expect([]);
    });

    it('/GET /:id', () => {
        return request(app.getHttpServer())
            .get('/api/v1/intervals/1')
            .expect(200)
            .expect([]);
    });

    it('/GET /types/{type}', () => {
        return request(app.getHttpServer())
            .get('/api/v1/intervals/types/age')
            .expect(200)
            .expect([]);
    });

    it('/GET /types/{type} - invalid type', () => {
        return request(app.getHttpServer())
            .get('/api/v1/intervals/types/invalid')
            .expect(500)
            .expect((res) => {
                expect(res.body.message).toBe('Invalid interval type received, valid values are: age,epoch,eon,period,era');
            });
    });

    afterAll(async () => {
        await app.close();
    });
});
