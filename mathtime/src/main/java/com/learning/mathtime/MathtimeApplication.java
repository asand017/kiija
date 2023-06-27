package com.learning.mathtime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.learning.mathtime")
public class MathtimeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MathtimeApplication.class, args);
	}

}
