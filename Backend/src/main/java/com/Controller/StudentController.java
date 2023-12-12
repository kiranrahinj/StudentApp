package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.Student;
import com.Repository.StudentRepository;

@RestController
@CrossOrigin
public class StudentController {
	@Autowired
	private StudentRepository studentRepo;
	
	@PostMapping("/add")
	void addStudent(@RequestBody Student student) {
		studentRepo.save(student);
		System.out.println("Student added "+ student.getName());
	}
	
	@GetMapping("/getAll")
	List<Student> getAll(){
		return studentRepo.findAll();
	}
	
}
